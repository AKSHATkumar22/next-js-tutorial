import { redirect } from "next/navigation";


export default function Profiles(){


    const userProfile = null;

    //yaha par redirect page kya karta hai kii yeh wapis wahi page par le aata hai agar usse woh page nhi mila toh
     
    if (userProfile === null)redirect('Design');

    return <div>
        <h1>This is the Yello Page</h1>
    </div>
}