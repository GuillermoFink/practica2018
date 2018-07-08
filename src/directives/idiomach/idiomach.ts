import { Directive } from '@angular/core';

/**
 * Generated class for the IdiomachDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[idiomach]' // Attribute selector
})
export class IdiomachDirective {

  ///pagina abm////
  accionesusuario: string;
  aceptar: string;
  borrar: string;
  modificar: string;
  cancelar: string;
  agregado: string;
  exito: string;
  error: string;
  mensajeerror: string;
  elegirarchivo: string;
  archivoimportado: string;
  archivoduplicado: string;
  archivoagregado: string;
  procesofinalizado: string;
  felicitaciones: string;
  usuarioeliminado: string;
  ////pagina encuesta////
  errorqr: string;
  encuestacreada: string;
  accionesencuesta: string;
  verresultados: string;
  eliminar: string;
  modificacion: string;
  activar: string;
  encuestaactivada: string;
  ingreseopciones: string;
  datosincompletos: string;
  completedatos: string;
  encuestamodificada: string;
  encuestaeliminada: string;
  deseaverresultados: string;
  elijaopcion: string;
  /////pagina QR/////
  nocorrespondeaula: string;
  verifiqueaula: string;
  noseencontraroncursos: string;
  dirijaseadmin: string;
  /////pagina ADMINISTRACION PERFIL/////
  cambiopass: string;
  cambioexitoso: string;
  /////pagina EXCEL/////
  listaduplicada: string;
  listaimportada: string;
  listaagregada: string;
   /////Seleccion Idioma/////
  lenguaje: string;

  constructor() {
    console.log('Hello IdiomaesDirective Directive');
    ////pagina abm////
    this.accionesusuario = "用户操作";
    this.aceptar = "接受";
    this.borrar = "删除";
    this.modificar = "变化";
    this.cancelar = "取消";
    this.agregado = "骨料";
    this.exito = "成功添加用户时";
    this.error = "错误";
    this.mensajeerror = "发生错误，请重试";
    this.elegirarchivo = "选择文件";
    this.archivoimportado = "该文件已被导入";
    this.archivoduplicado = "重复的文件";
    this.archivoagregado = "该文件已成功添加！";
    this.procesofinalizado = "过程完成";
    this.felicitaciones = "恭喜！";
    this.usuarioeliminado = "用户已成功删除";
    ////pagina encuesta////
    this.errorqr = "扫描的二维码不对应于调查"
    this.encuestacreada = '您的调查已成功创建！'
    this.accionesencuesta = "调查行动"
    this.verresultados = "查看结果"
    this.eliminar = "清除"
    this.modificacion = "修改"
    this.activar = "激活"
    this.encuestaactivada = "您的调查已成功激活！"
    this.ingreseopciones = "输入新的选项"
    this.datosincompletos = "数据不完整！"
    this.completedatos = "请填写所需的信息继续"
    this.encuestamodificada = "调查修改成功！"
    this.encuestaeliminada = "调查成功删除！"
    this.deseaverresultados = "你想看看结果吗？"
    this.elijaopcion = "选择你的选择"
    /////pagina QR/////
    this.nocorrespondeaula = "这个教室不属于"
    this.verifiqueaula = "在管理中检查你的教室"
    this.noseencontraroncursos = "没有课程被发现"
    this.dirijaseadmin = "地址到管理"
    /////pagina ADMINISTRACION PERFIL/////
    this.cambiopass = "密码更改"
    this.cambioexitoso = "成功修改！ 请重新登录。"
    /////pagina EXCEL/////
    this.listaimportada = " 该列表已被导入"
    this.listaduplicada = "重复列表"
    this.listaagregada = "该列表已成功添加！"
    //////Idioma////////
    this.lenguaje = "語言"
  }

}
