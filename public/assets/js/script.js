function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function test(){
    await sleep(4000);
    document.getElementById("preloaderc").style.display = "none";
}

test();
window.onload = function(){

};