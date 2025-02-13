import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

export default function Page(arg){

    switch(arg.name){

	case 'demo1':

    return(
       <Demo1 />
     );

     break;

     case 'demo2':

    return(
        <Demo2/>
     );

     break;

     case 'welcome' :

     return(
        <div className="container">
            <h2 className="text-center mt-5">Welcome to my demo projects. You can find links in navigation bar</h2>
            </div>
     );

     break;
    }

}