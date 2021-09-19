
abstract class Component {
    protected _parent: Component | undefined;
    constructor() {
    }
    public setParent(parent: Component) {
        this._parent = parent;
    }
    // @ts-ignore
    public addItem(component: Component):void{};
    abstract isComposite():boolean;
    abstract singleClick():string;
    abstract doubleClick():string;
}
class leaf extends Component{
    private name:string;
    private type:string;
    constructor(name:string, type:string){
        super()
        this.name = name;
        this.type=type;
    }

    doubleClick(): string {
        return "";
    }

    isComposite(): boolean {
        return false;
    }

    singleClick(): string {
        return this.name;
    }

}
class Composite extends Component{
    protected _children:Component[]=[];
    protected _name:string;
    protected _type:string;
    constructor(name:string, type:string) {
        super();
        this._name=name;
        this._type=type;
    }
    public addItem(component: Component):void{
        this._children.push(component);
    }
    public doubleClick():string {
        const result=[];
        for(const child of this._children){
            result.push(child.singleClick())
        }
        return `Component ${result.join('+')}`;
    }

    public isComposite(): boolean {
        return false;
    }

    public singleClick(): string {
        return this._name;
    }

}
let  file=new leaf("strategy","pdf");
file.singleClick()
let folder=new Composite("Design Pattern",'pdf');
console.log(folder.singleClick())
console.log(folder.doubleClick())
folder.addItem(file)
console.log(folder.doubleClick())