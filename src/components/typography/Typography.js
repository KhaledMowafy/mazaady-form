export const H1 = ({children, className=''}) => {
    return (
      <h1 className={`text-4xl font-extrabold ${className}`}>
          {children}
      </h1>
    )
  }

  export const H2 = ({children, className}) => {
    return (
      <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-red ${className}`}>
          {children}
      </h2>
    )
  }
  
  export const H3 = ({children, className}) => {
    return (
      <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight text-red ${className}`}>
          {children}
      </h3>
    )
  }
  
  export const H4 = ({children, className}) => {
    return (
      <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight text-red ${className}`}>
          {children}
      </h4>
    )
  }
  export const P = ({children, className}) => {
    return (
      <p className={`leading-7 [&:not(:first-child)]:mt-2 font-black text ${className}`}>
          {children}
      </p>
    )
  }
  export const Label = ({children, className='', label=''}) => {
    return (
      <label className={`leading-7 [&:not(:first-child)]:mt-2 font-black ${className}`} htmlFor={`${label}`}>
          {children}
      </label>
    )
  }