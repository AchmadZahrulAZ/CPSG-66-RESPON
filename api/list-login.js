import supabase from "./supabase";

const list = async (req, res) => {
    try { 
        const { data: login, error } = await supabase
            .from('login')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(login)
    } catch (error) {
        return res.json(error)
    }    
}

export default list;