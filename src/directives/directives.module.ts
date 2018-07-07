import { NgModule } from '@angular/core';
import { IdiomaesDirective } from './idiomaes/idiomaes';
import { IdiomaenDirective } from './idiomaen/idiomaen';
import { IdiomaptDirective } from './idiomapt/idiomapt';
import { IdiomaalDirective } from './idiomaal/idiomaal';
import { IdiomachDirective } from './idiomach/idiomach';
@NgModule({
	declarations: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective,
    IdiomaalDirective,
    IdiomachDirective],
	imports: [],
	exports: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective,
    IdiomaalDirective,
    IdiomachDirective]
})
export class DirectivesModule {}
