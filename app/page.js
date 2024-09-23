import * as React from 'react'
function RestaurantSelectionPage() {
  const restaurants = [
    { terminal: 'Terminal 3', name: 'Tim Hortons' },
    { terminal: 'Terminal 3', name: 'CIBO Express' },
    { terminal: 'Terminal 3', name: 'Starbucks' },
    { terminal: 'Terminal 3', name: 'Apropos' },
  ]
  return (
    <div className="flex flex-col pb-2.5 bg-white max-w-[834px]">
      {' '}
      <header className="flex flex-col px-4 pb-1.5 w-full text-xs text-black bg-white max-md:max-w-full">
        {' '}
        <div className="flex z-10 gap-5 justify-between w-full font-medium max-md:flex-wrap max-md:max-w-full">
          {' '}
          <div className="flex gap-2.5 py-1.5">
            {' '}
            <time className="grow" dateTime="09:41">
              9:41 AM
            </time>{' '}
            <time dateTime="2023-09-25">Sun Sep 25</time>{' '}
          </div>{' '}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a97eb38bb5996af1d9aceb8e2e380154d9db4f805f87f80d460e268e7712ae30?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
            alt=""
            className="shrink-0 max-w-full aspect-[4.17] w-[102px]"
          />{' '}
        </div>{' '}
        <nav className="flex gap-5 justify-between items-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          {' '}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3826bdcaae5a3c0cbf9f106fe36166be125c4f4bd270f84a23048505424b47c?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-[4] w-[97px]"
          />{' '}
          <div className="flex flex-col justify-center self-stretch my-auto">
            {' '}
            <div className="flex gap-5 justify-between items-center px-3.5 py-0.5 w-full rounded-lg bg-neutral-200">
              {' '}
              <div
                className="self-stretch my-auto text-center"
                aria-hidden="true"
              >
                􀅐
              </div>{' '}
              <div className="flex gap-1.5 self-stretch text-sm tracking-normal leading-5 text-neutral-600">
                {' '}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/89564595037b9411e6e678fc0c9cfe79e7c30a56f42bedb7e22836a39ed08598?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
                  alt=""
                  className="shrink-0 w-4 aspect-[0.67]"
                />{' '}
                <div>yyzbank</div>{' '}
              </div>{' '}
              <div
                className="self-stretch my-auto text-center"
                aria-hidden="true"
              >
                􀊱
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/673761e769305c8a72326a7320842872f5f4985d938993d2848f8f79f0a1094e?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
            alt=""
            className="shrink-0 self-stretch max-w-full aspect-[4.76] w-[150px]"
          />{' '}
        </nav>{' '}
      </header>{' '}
      <div className="flex gap-5 justify-between px-6 py-5 w-full bg-fuchsia-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        {' '}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cef0ac098f9fcca663b7d38875c196f76618326e282b8f05d4d4cd41cb4193d?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
          alt=""
          className="shrink-0 aspect-[1.85] w-[93px]"
        />{' '}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf5245edff987525ee59aea8a868d66ec2f55af7a7ecd0a49e75bd585705c55d?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
          alt=""
          className="shrink-0 my-auto max-w-full aspect-[14.29] w-[162px]"
        />{' '}
      </div>{' '}
      <main className="flex flex-col items-center px-6 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {' '}
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 min-h-[352px] max-md:px-5 max-md:max-w-full">
          {' '}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb04df9c9b85202abd8e101ae214b3e6b1bc01b5ace44d84ac29bc87171a8a5c?apiKey=1b60bac41bbe45b683ec1c4d631246d4&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />{' '}
          <div
            className="relative shrink-0 mt-16 mb-20 ml-24 w-3.5 h-3.5 bg-blue-600 rounded-full max-md:my-10"
            aria-hidden="true"
          />{' '}
        </div>{' '}
        <h1 className="self-start mt-11 ml-24 text-4xl font-extrabold leading-10 text-fuchsia-900 max-md:mt-10 max-md:ml-2.5">
          {' '}
          Select a restaurant{' '}
        </h1>{' '}
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            terminal={restaurant.terminal}
            name={restaurant.name}
          />
        ))}{' '}
        <div
          className="shrink-0 mt-14 max-w-full h-1 bg-black rounded-[87.262px] w-[276px] max-md:mt-10"
          aria-hidden="true"
        />{' '}
      </main>{' '}
    </div>
  )
}
function RestaurantCard({ terminal, name }) {
  return (
    <div className="flex flex-col px-4 py-5 mt-6 w-full bg-white rounded-lg border border-solid shadow border-neutral-200 max-w-[584px] max-md:max-w-full">
      {' '}
      <div className="text-sm tracking-normal leading-5 text-black text-opacity-60 max-md:max-w-full">
        {' '}
        {terminal}{' '}
      </div>{' '}
      <div className="mt-1 text-lg font-bold leading-6 text-fuchsia-900 max-md:max-w-full">
        {' '}
        {name}{' '}
      </div>{' '}
    </div>
  )
}
export default RestaurantSelectionPage
