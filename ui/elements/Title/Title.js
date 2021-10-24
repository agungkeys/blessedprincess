function Title(props) {
  const { title, textAlign='text-left' } = props;
  return (
    <div>
      <div className="flex flex-col px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 lg:flex-row">
        <div className="lg:w-full">
          <h2 className={`relative font-sans text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl sm:leading-none ${textAlign && textAlign}`}>
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 sm:block"
              >
                <defs>
                  <pattern
                    id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className='relative font-cursive text-black'>{title}</span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Title;