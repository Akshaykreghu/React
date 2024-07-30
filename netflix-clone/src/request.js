const APIKEY ='19f84e11932abbc79e6d83f82d6d1045';
const requests ={
    fetchTrending: `/trending/all/week?api_keys=${APIKEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    
}