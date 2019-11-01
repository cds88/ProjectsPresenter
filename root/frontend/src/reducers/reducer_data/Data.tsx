export interface Data {
    id: number;
    image: string;
    images: Image[];
    textcontent:string;
    title: string;
    video: string;
    url: string;
}   


export interface Image{
    id: number;
    image: string;
    project: number;

}