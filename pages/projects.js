function projects() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3 bg-purple-100 border-2 rounded-lg border-purple-300">
              <div class="h-full bg-purple-100 bg-opacity-75 px-12 pt-12 pb-12 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Ritik Nandanwar
                </h2>
                {/* TITLE OF PROJECT */}
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  React color generator
                </h1>
                {/* DESC OF PROJECT */}
                <p class="leading-relaxed mb-3">
                  Generate/pick color with different shades for your next project on the go
                </p>
                {/* TECHNOLOGIES / TECHS USED */}
                <div className="grid  grid-cols-3 gap-4 ">
                  <span class="text-xs font-medium bg-purple-200  py-2 -mx-1 rounded-3xl text-red-500 align-middle">
                    React js
                  </span>
                  <span class="text-xs font-medium bg-purple-200  py-2 -mx-1 rounded-3xl text-red-500 align-middle">
                    Node js
                  </span>
                  <span class="text-xs font-medium bg-purple-200  py-2 -mx-1 rounded-3xl text-red-500 align-middle">
                    Materialize
                  </span>
                </div>
                
                <a class="text-indigo-500 mt-6 items-center inline-flex" href="https://github.com/Ritik-Nandanwar/Generate-color-Reaact-app.git" target="_blank">
                    View Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon mx-4 icon-tabler icon-tabler-brand-github"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#b794f4"
                    fill="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default projects;
