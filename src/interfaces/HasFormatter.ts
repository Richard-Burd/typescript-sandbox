// Lesson 16 - Interfaces with classes
// https://www.youtube.com/watch?v=XPGFqx8Vg-Y&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=16
export interface HasFormatter {
  // a class method called "format()" that returns a string must exist in a
  // class object that *implements* this HasFormatter interface
  format(): string;
}
