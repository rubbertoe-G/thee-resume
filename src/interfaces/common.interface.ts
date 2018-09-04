interface Education{
  name: string,
  degree:string,
  minor?:string,
  place:string,
  time:string,
  image?:string,
  backImage?:string,
  gpaGeneral:number,
  gpaGrad: number,
  comment?:string
  
}

interface Experience {
  name: string,
  place:string,
  image:string,
  position:string,
  dates: string,
  description: any

}

export {Education, Experience}