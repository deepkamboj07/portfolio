const Footer=()=>{
    const year = new Date().getUTCFullYear();
    return(
        <div className="py-20 my-10 flex flex-wrap justify-center gap-4 text-mainGrey text-xs">
            <div>
                <span>© {year} Deepanshu Kamboj.</span>
            </div>
            <div>
                <span>Terms</span>
            </div>
            <div>
                <span>Privacy</span>
            </div>
            <div>
                <span>Security</span>
            </div>
            <div>
                <span>Status</span>
            </div>
            <div>
                <span>Docs</span>
            </div>
            <div>
                <span>Contact</span>
            </div>
            <div>
                <span>Manage Cookies</span>
            </div>
            <div>
                <span>Do not share my personal information</span>
            </div>
            
        </div>
    )
}
export default Footer;