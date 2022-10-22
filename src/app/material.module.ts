import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports:[
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,

    ],
    exports:[
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule

    ]
})
export class MaterialModule{}