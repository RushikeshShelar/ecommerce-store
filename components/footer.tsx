import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-whhite border-t px-20 h-12 w-full">
            <div className="mx-auto py-18 flex justify-between items-center  h-12 w-full ">
                <p className="text-center text-sm text-black">
                    &copy; 2024 <Link href='/'>NextMart</Link>, Inc. All rights reserved.
                </p>
                <p className="text-center text-sm text-black">
                    Made By <Link href="https://rushikeshshelar.tech">
                                <span  className="text-gray-600 font-bold">Rushikesh Shelar</span>
                            </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;