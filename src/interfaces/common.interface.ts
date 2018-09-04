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

interface Skill {
  name: string,
  points?: number,
}

interface SkillGroup{
  name:string,
  skills: Array<Skill>
}

export {Education, Experience, Skill, SkillGroup}