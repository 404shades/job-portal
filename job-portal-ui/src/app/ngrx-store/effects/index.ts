import { AuthorizationEffetcs } from './authorization'
import { CategoryEffects } from './job-categories'

export * from './job-categories'
export const effects:any[] = [
    CategoryEffects,
    AuthorizationEffetcs
 ]