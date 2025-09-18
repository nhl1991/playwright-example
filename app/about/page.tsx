import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <h2>Playwright is a E2E</h2>
      
      <Link href="/">Home</Link>
    </div>
  );
}

function InputComponent(){


  return(
    <>
      <input type="text" placeholder="text" role="textbox"/>
    </>
  )
}
