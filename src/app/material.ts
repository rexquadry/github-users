import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule } from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule],
    exports: [MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule {}