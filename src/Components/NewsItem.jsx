import { Key } from 'lucide-react';
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {type,Description,imageUrl,url,author,date} = this.props;
    return (
    <>
<div class="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80 my-3 mx-3 ">
    <img class="rounded-md max-h-40 w-full object-cover" src={!imageUrl?"https://imgs.search.brave.com/fvIKxxwP5vob_gLGxeeBRzFuOfTv3wzNd8N4EtpfKlg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/NDA3NDA0Ny92ZWN0/b3IvYnJlYWtpbmct/bmV3cy1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DNUJyeXZh/TS1YMUlpUXRkeXN3/UjNIc2t5SVpDcXZO/Um9qckNSTG9UTjBR/PQ"
        :imageUrl
    } alt="officeImage"/>
    <p class="text-gray-900 text-xl font-semibold ml-2 mt-4">
         {type+'.....'}
    </p>
    <p class="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
        {Description+'.....'}
    </p>
    <p>By {!author?"Unkown":author} on {new Date(date).toGMTString()}</p>
    <button type="button" class="bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm"
     onClick={()=> window.open(url,"_blank")}>
        Learn More
    </button>
    
</div>
    </>
    )
  }
}

export default NewsItem
