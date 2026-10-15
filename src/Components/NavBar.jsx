 
import React, { Component } from "react";
import logo from "../images/logo.svg";
import OfferCard from "./OfferCard";

export default class NavBar extends Component {
  state = {
    showOffer: false,
    mobileMenuOpen: false,
  };

  categories = [
    { label: "Home", value: "general" },
    { label: "Tesla", value: "tesla" },
    { label: "US News", value: "country" },
    { label: "Top Headlines", value: "headlines" },
    { label: "All Articles", value: "everything" },
  ];

  handleCategoryChange = (category) => {
    this.props.changeCategory(category);

    this.setState({
      mobileMenuOpen: false,
    });
  };

  render() {
    const { mobileMenuOpen, showOffer } = this.state;
    const activeCategory = this.props.newsType || "general";

    return (
      <header className="relative z-50 w-full bg-white text-gray-900 shadow-sm">

        {/* Offer Banner */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
          <span>🔥 Exclusive Price Drop!</span>{" "}

          <button
            type="button"
            onClick={() => this.setState({ showOffer: true })}
            className="font-bold underline underline-offset-4 transition hover:text-orange-100"
          >
            Get 50% Off
          </button>
        </div>

        {/* Offer Modal */}
        {showOffer && (
          <OfferCard
            title="Premium Plan"
            description="Get everything you need with our premium experience."
            oldPrice={999}
            price={499}
            discount={50}
            features={[
              "Unlimited access",
              "Premium features",
              "Priority support",
              "Cancel anytime",
            ]}
            buttonText="Get Premium"
            onClose={() => this.setState({ showOffer: false })}
          />
        )}

        {/* Main Navbar */}
        <nav className="border-b border-gray-100">
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

            {/* Logo */}
            <button
              type="button"
              onClick={() => this.handleCategoryChange("general")}
              aria-label="NewsHell home"
              className="flex shrink-0 items-center gap-2"
            >
              <img
                src={logo}
                alt="NewsHell Logo"
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />

              <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
                News<span className="text-purple-600">Hell</span>
                <span className="ml-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {this.categories.map((category) => {
                const isActive = activeCategory === category.value;

                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() =>
                      this.handleCategoryChange(category.value)
                    }
                    className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-purple-700"
                    }`}
                  >
                    {category.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex shrink-0 items-center gap-3">

              {/* Get Started */}
              <button
                type="button"
                onClick={() => this.setState({ showOffer: true })}
                className="hidden rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:inline-flex"
              >
                Get Started
                <span className="ml-2">→</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={
                  mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                onClick={() =>
                  this.setState((prevState) => ({
                    mobileMenuOpen: !prevState.mobileMenuOpen,
                  }))
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-50 lg:hidden"
              >
                {mobileMenuOpen ? (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
              <div className="mx-auto flex max-w-[1440px] flex-col gap-2">
                {this.categories.map((category) => {
                  const isActive = activeCategory === category.value;

                  return (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() =>
                        this.handleCategoryChange(category.value)
                      }
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                        isActive
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category.label}

                      {isActive && (
                        <span className="text-lg text-purple-600">✓</span>
                      )}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    this.setState({
                      showOffer: true,
                      mobileMenuOpen: false,
                    })
                  }
                  className="mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Get Started →
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }
}
 
