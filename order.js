                                 // ----------------constructor--------------------
function Food(name, type, price, deliveryTime) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliveryTime = deliveryTime;
    this.totalFoodRate =[];
    this.comments = [];
    this.isReady = false;
    this.order=function isPremiumUser(boolean){
        if(boolean) console.log(0.8*this.price,this.totalFoodRate)
        else console.log(this.price,this.totalFoodRate)
    }
    this.rateFood=function SetRate(rateNum){
        this.totalFoodRate.push(rateNum)
            let sumRate=this.totalFoodRate.reduce((preVal,curVla)=>{
                return preVal+curVla;
            })
        return sumRate/(this.totalFoodRate.length)
        };
}
                         //--------------outcome  by constructor ----------------
let burger=new Food('burger','fastfood',160,40)
//console.log(burger)

                            //-----------------------------burger rating---------------------
let rate1=burger.rateFood(5)
 console.log(burger.totalFoodRate)

let rate2=burger.rateFood(4)
 //console.log(burger.totalFoodRate)
 //console.log(burger)
 //console.log(burger.rateFood(5))

                       // -------------------------- test order ----------------------
 //console.log(burger.order(true))
 //console.log(burger.order(false))


                             // -------------------------- with factory ----------------------
function food(name, type, price, deliveryTime,order) {
    return {
        name,
        type,
        price,
        deliveryTime,
        totalFoodRate:[],
        comments: [],
        isReady: false,
        order:function isPremiumUser(True){
            if(True) console.log(0.8*this.price,this.totalFoodRate)
            else console.log(this.price,this.totalFoodRate)
    },
        rateFood:function addRate(rateNum){
            this.totalFoodRate.push(rateNum)
            let sumRate=this.totalFoodRate.reduce((preVal,curVla)=>{
                return preVal+curVla
            })
            return sumRate/(this.totalFoodRate.length)
        }
        }
}
                                 //-------------------------outcome by factory-----------------
let chicken=food('chicken','fast-food',45,15)
 //console.log(chicken)

                                //------------------------------ chicken rating---------------
// console.log(chicken.rateFood(4))
// console.log(chicken.totalFoodRate)

// console.log(chicken.rateFood(3))
// console.log(chickentotalFoodRate)

// console.log(chicken.rateFood(5))
// console.log(chicken.totalFoodRate)


                                    //----------------------------order test----------------------
// console.log(chicken.order(true))
// console.log(chicken.order(false))

                              //-------------comments and reviews-----------------------//
function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:[],
        text,
        rate:function SetRate(rateNum) {
          this.totalRate.push(rateNum)
            let sum=this.totalRate.reduce((preVal,curVal)=>
            {
                return preVal+curVal
            })
            return sum/this.totalRate.length
        }
    }


}
                          //---------------comments(burger,chicken)------------------
let comment1=addComment('amir','awsome!')
// console.log(comment1)
burger.comments.push(comment1)
// console.log(burger)

let comment2=addComment('hanna','tasty!')
chicken.comments.push(comment2)
//console.log(chicken)

//-------------------------------------------add rate to comment------------------------
// console.log(comment1.rate(5))
// console.log(comment1.rate(3))
// console.log(comment1.rate(2))
// console.log(comment1.totalRate)
// console.log(comment1)
// console.log(burger)

