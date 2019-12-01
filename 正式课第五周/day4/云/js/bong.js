function bong(box,box2){
    let {left:l,right:r,top:t,bottom:b} = box.getBoundingClientRect()
    let {left:l2,right:r2,top:t2,bottom:b2} = box2.getBoundingClientRect()

    if(r<l2||b<t2||l>r2||t>b2){
        return false
    }else{
        return true
    }
}