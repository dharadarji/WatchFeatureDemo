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
    }

}