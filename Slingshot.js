class Slingshot{
    constructor(pointA,bodyB){
var option={
pointA: pointA,
bodyB: bodyB,
length: 20,
stiffness: 1.2,
    }
    this.pointA=pointA
    this.sling =Constraint.create(option)
    World.add(world,this.sling)
}
fly(){
    this.sling.bodyB=null
}

display(){
    if(this.sling.bodyB){

    
var pointA=this.pointA
var pointB=this.sling.bodyB.position
strokeWeight(2)
stroke("white")
line (pointA.x, pointA.y, pointB.x,pointB.y)
}
}}