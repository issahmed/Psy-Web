export class Test {
    public name : string ;
    public description : string ;
    public imagePath : string ;
    public questions :string[] ;
    public result : string;
    constructor(name :string ,
        description :string ,
        imagePath :string ,
        questions : string[],
        result : string     
        ){
        this.description=description;
        this.imagePath=imagePath;
        this.name=name;
        this.questions=questions;
        this.result= result ;
    }

}