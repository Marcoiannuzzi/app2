import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports:[
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule

    ],
    exports:[
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule
    ]
})
export class MaterialModule{}