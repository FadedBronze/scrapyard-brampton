
function App() {
  return (
    <div class="patrick relative w-full">
      <div class="absolute top-0 left-0 -z-10 w-full h-full" style={{
        backgroundImage: 'url("/public/mattile.png")',
        backgroundSize: "contain",
        backgroundRepeat: 'repeat-y',
      }}></div>
      <header class="w-full">
        <div class="p-1 text-center bg-red w-full text-darkblue text-md">
          This site will be relocated by the time signups open at which point it will instead redirect there.
        </div>
        <nav class="text-white w-full flex gap-5 justify-center text-lg p-3">
          <a href="#">Slack</a>
          <a href="#">Instagram</a>
          <a href="#">Home</a>
          <a href="#">Faq</a>
          <a href="#">Hack Club</a>
        </nav>
      </header>
      <div style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 20vw, 28rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 20vw, 28rem))",
        paddingBottom: "2.5rem",
        paddingTop: "1rem",
      }}>
        <img class="w-full h-full object-contain" src="/public/logobig.png"/>
      </div>
      <article style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingBottom: "2.5rem",
        lineHeight: "1.25rem",
      }} class="[&_strong]:text-red text-white flex flex-col gap-3 md:text-center md:text-lg">
        <p>Scrapyard is an event hosted at cities around the world where <strong>hackers compete to make the coolest junk</strong> - and its hosted by highschoolers.</p> 
        <p>Enter your <strong>email below</strong> to notify yourself when signups will open</p> 
        <p>Let us know if you can make it to scrapyard brampton on (<strong>march 15-16</strong>) for a weekends worth of making cool stuff and memories!</p> 
      </article>
      <div style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingBottom: "2.5rem",
      }} class="flex rounded w-full">
        <input class="grow bg-opacity-20 p-2 bg-white rounded placeholder:text-black placeholder:opacity-60 outline-none" placeholder="youremail@example.com" />
        <button class="bg-white px-[8%] rounded">Notify me!</button>
      </div>
      <div class="w-full relative" style={{
        height: "10rem", 
        backgroundImage: 'url("/public/paper.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
      }}>
        <div class="overflow-hidden hidden max-lg:block absolute top-0 left-1/2 w-[100%]" style={{
          transform: "translate(-50%, 2rem)",
        }}> <img class="object-cover object-left-top w-full h-full" style={{transform: "scale(1.2)"}} src="/public/bramptonhall.png"/> </div>
      </div>
    </div>
  )
}

export default App
