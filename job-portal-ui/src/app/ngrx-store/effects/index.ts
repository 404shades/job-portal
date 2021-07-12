import { AuthorizationEffetcs } from './authorization'
import { CategoryEffects } from './job-categories'
import { JobEffects } from './jobs'

export * from './job-categories'
export const effects:any[] = [
    CategoryEffects,
    AuthorizationEffetcs,
    JobEffects,
 ]