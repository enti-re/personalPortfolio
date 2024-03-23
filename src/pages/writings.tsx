import React from "react";
import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";
import { ArrowLeft } from "react-feather";
import Link from "next/link";


const Writings =()=>{
    const title = [{title: "Tech I am using in 2024",link: "#"},{title: "Tips on Clean Code",link: "#"}]

    const writingBlocks = ()=> {
        return title.map((item:any) => {
        return <><div className="py-2 flex items-center">{item.title}</div><hr style={{opacity: ".4"}} /></>
       })
    }

    const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
        ssr: false,
      });

    return <>
    <AnimatedCursor
          color={"0,0,0"}
          innerSize={8}
          outerSize={8}
          innerScale={2}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".writing",
            ".link",
          ]}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
    <div style={{marginInline: "24%",marginTop: "4%",overflow: "hidden"}} className="h-screen overflow-hidden">
        <div className="fixed left-60">
            <Link href="/">
            <ArrowLeft  size={"20px"} />
            </Link>
        </div>
        <div>Blogs</div>
        <main style={{paddingTop: "20px",overflow: "hidden"}}>
            {writingBlocks()}
        </main>
    </div>
    </>
}

export default Writings