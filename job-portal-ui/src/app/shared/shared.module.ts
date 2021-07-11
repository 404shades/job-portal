import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HoverShadowDirective } from "./directives/hover-shadow.directive";

@NgModule({
    declarations:[HoverShadowDirective],
    exports:[HoverShadowDirective],
    imports:[CommonModule]
})
export class SharedModule {}
