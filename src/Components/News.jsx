 
import React, { Component } from 'react';
 

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      error: '',
      hasMore: true,
      currentIndex: 0
    };

    this.feedRef = React.createRef();
    this.touchStartY = 0;
    this.lastWheelTime = 0;
  }

  fetchNews = async (page = this.state.page, category = this.props.newsType || 'general') => {
    if (this.state.loading || !this.state.hasMore) {
      return;
    }

    this.setState({ loading: true, error: '' });

 
    let url = '';

    switch (category) {
      case 'tesla':
        url = `https://newsapi.org/v2/everything?q=tesla&pageSize=20&page=${page}&apiKey=${apiKey}`;
        break;

      case 'country':
      case 'headlines':
        url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${page}&apiKey=${apiKey}`;
        break;

      case 'everything':
        url = `https://newsapi.org/v2/everything?q=news&pageSize=20&page=${page}&apiKey=${apiKey}`;
        break;

      default:
        url = `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=20&page=${page}&apiKey=${apiKey}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok || data.status === 'error') {
        throw new Error(data.message || 'Unable to fetch news');
      }

      const newArticles = data.articles || [];

      this.setState((prevState) => ({
        articles:
          page === 1
            ? newArticles
            : [...prevState.articles, ...newArticles],
        page,
        loading: false,
        error: '',
        hasMore: newArticles.length === 20
      }));
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message || 'Something went wrong'
      });
    }
  };

  componentDidMount() {
    this.fetchNews(1);

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newsType !== this.props.newsType) {
      this.setState({
        articles: [],
        page: 1,
        currentIndex: 0,
        hasMore: true,
        loading: false,
        error: ''
      }, () => {
        this.fetchNews(1, this.props.newsType || 'general');
      });
    }

    if (
      prevState.currentIndex !== this.state.currentIndex &&
      this.state.currentIndex >= this.state.articles.length - 3 &&
      this.state.hasMore &&
      !this.state.loading
    ) {
      this.fetchNews(this.state.page + 1);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.nextNews();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.previousNews();
    }
  };

  nextNews = () => {
    if (this.state.currentIndex < this.state.articles.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1
      }));
    } else if (this.state.hasMore && !this.state.loading) {
      this.fetchNews(this.state.page + 1);
    }
  };

  previousNews = () => {
    if (this.state.currentIndex > 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  };

  handleWheel = (event) => {
    const now = Date.now();

    if (now - this.lastWheelTime < 650) {
      return;
    }

    this.lastWheelTime = now;

    if (event.deltaY > 0) {
      this.nextNews();
    } else if (event.deltaY < 0) {
      this.previousNews();
    }
  };

  handleTouchStart = (event) => {
    this.touchStartY = event.touches[0].clientY;
  };

  handleTouchEnd = (event) => {
    const difference =
      this.touchStartY - event.changedTouches[0].clientY;

    if (Math.abs(difference) < 50) {
      return;
    }

    if (difference > 0) {
      this.nextNews();
    } else {
      this.previousNews();
    }
  };

  render() {
    const {
      articles,
      loading,
      error,
      currentIndex,
      hasMore
    } = this.state;

    const article = articles[currentIndex];

    return (
      <div
        ref={this.feedRef}
        onWheel={this.handleWheel}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        className="relative bg-black text-white overflow-hidden"
        style={{ height: 'calc(100vh - 70px)' }}
      >
        {error && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black p-6 text-center">
            <p className="text-red-400">Error: {error}</p>
          </div>
        )}

        {article && (
          <div
            key={article.url}
            className="absolute inset-0"
          >
            <img
              src={
                article.urlToImage ||
                'https://placehold.co/900x1200/171717/ffffff?text=NewsHell'
              }
              alt={article.title || 'News image'}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">
                {article.source?.name || 'NewsHell'}
              </p>

              <h1 className="mb-4 max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
                {article.title}
              </h1>

              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-gray-200 md:text-base">
                {article.description || 'Read the full story for more details.'}
              </p>

              <div className="mb-5 text-xs text-gray-300">
                {article.author && `By ${article.author}`}
                {article.publishedAt &&
                  ` • ${new Date(article.publishedAt).toLocaleDateString()}`}
              </div>

              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                >
                  Read Full Article ↗
                </a>
              )}
            </div>

            <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
              <button
                onClick={this.previousNews}
                disabled={currentIndex === 0}
                aria-label="Previous news"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-2xl transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ↑
              </button>

              <button
                onClick={this.nextNews}
                disabled={
                  currentIndex === articles.length - 1 &&
                  !hasMore
                }
                aria-label="Next news"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-2xl transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ↓
              </button>
            </div>

            <div className="absolute right-6 top-5 z-20 rounded-full bg-black/50 px-4 py-2 text-sm">
              {currentIndex + 1} / {articles.length}
            </div>
          </div>
        )}

        {loading && (
          <div className="absolute bottom-4 left-0 right-0 z-30 text-center text-sm text-white">
            Loading news...
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="flex h-full items-center justify-center">
            No news available.
          </div>
        )}

        {!hasMore && articles.length > 0 &&
          currentIndex === articles.length - 1 && (
            <div className="absolute bottom-4 left-0 right-0 z-20 text-center text-xs text-gray-300">
              You have reached the end of available news.
            </div>
          )}
      </div>
    );
  }
}

export default News;
 
