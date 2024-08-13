import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TodoComponent } from "./todo.component";

@NgModule({
    declarations: [TodoComponent],
    imports: [CommonModule, BrowserModule, RouterModule.forChild([
        { path: '', component: TodoComponent }
    ])],
})
export class TodoModule { }