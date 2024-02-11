const NavigationItem=({Icon,title,selected,onclick})=>{
    return(
        <div onClick={onclick} className={`text-white items-center pb-1 ${selected && 'border-b-2 border-[#DC765F]'}`}>
                <div className="flex gap-2 hover:bg-[#171B20] p-2 rounded-md cursor-pointer">
                    <Icon className="h-5 w-5 text-mainGrey"/>
                    <h4 className="text-sm">{title}</h4>
                </div>
        </div>
    )
}

export default NavigationItem;