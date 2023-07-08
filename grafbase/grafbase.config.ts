import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url(),
  linkedInUrl:g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),
})

const Project = g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string(),
  githubUrl:g.url(),
  liveSiteUrl:g.url(),
  image:g.url(),
  createdBy:g.relation(()=>User),
  category:g.string().search()

})

export default config({
  schema: g
  
})
