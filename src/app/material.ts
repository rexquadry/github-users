import { MatButton, MatIcon, MatInput } from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButton, MatIcon, MatInput],
    exports: [MatButton, MatIcon, MatInput]
})
export class MaterialModule {}