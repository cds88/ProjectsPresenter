

export interface Data{
    Projects: Project[];
    Assets: Assets 

}

export interface Project {
    id: number;
    image: string;
    images: Image[];
    textcontent:string;
    title: string;
    url: string;
    cover: {id:number, cover:string, project:number}[];
}   
export interface Assets {
    id:number;
    mail: string;
    mailLogo: string;
    git: string;
    gitLogo: string;

}
export interface Image{
    id: number;
    image: string;
    project: number;
}