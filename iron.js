class Iron{
	constructor(x,y,w,h)
	{
	var options={
	restituion:0.8,
	friction:3,
	density:30
	}
		this.x=x;
		this.y=y;
        this.w=w;
		this.h=h;
        
		this.body=Bodies.rectangle(this.x, this.y,this.h,this.w, options)
		World.add(world, this.body);
	}
	display(){
		var pos =this.body.position;
		rectMode(CENTER);
		rect(pos.x, pos.y, this.w, this.h);
	}
}