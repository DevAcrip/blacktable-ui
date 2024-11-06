export abstract class Modelo<T> {
    public Id?: number;
    public Usuario?: number;
    
    constructor(model?: Partial<T>) {
      if (model) {
        Object.assign(this, model);
      }      
    }
  
    public toJson(): any {
      return JSON.parse(JSON.stringify(this));
    }
  }