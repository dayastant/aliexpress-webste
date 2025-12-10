import { FC } from "react";
import Image from "next/image";
import LogoImg from '../../../public/assets/icons/logo-1.png'

interface LogoProps{
    width : string;
    height : string;
}

const Logo : FC<LogoProps> = ({width,height}) =>{
    return <div>
        <Image src={LogoImg} alt="AliExpress"  className="w-full h-full object-cover  overflow-visible  "/>
    </div>
}
export default Logo;