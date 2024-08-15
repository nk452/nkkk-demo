function name_shortner(name, max_Length)
{
    if(name.length > max_Length)
    {
        return name.substring(0, max_Length)+"....."
    }
    return name
}
let name1 = name_shortner("nikhilkumar" , 7)
console.log(name1)