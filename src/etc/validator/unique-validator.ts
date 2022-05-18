import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidatorOptions } from 'class-validator';
import { getConnection } from 'typeorm';
@Injectable()
export class UniqueValidator implements ValidatorConstraintInterface{
    async validate(value:any, args:ValidationArguments){
        let find = {[args.constraints[1]] : args.value}
        let cek = await getConnection().getRepository(args.constraints[0]).findOne(find)
        if(cek) return false
        return true
    }
    defaultMessage(args:ValidationArguments){
        return args.property + '' + args.value + 'sudah digunakan'
    }
}
export function IsUnique(option:any,isValidationOptions?: ValidatorOptions){
    return function (object:any, propertyName:string){
      registerDecorator({
          name : 'IsUnique',
          target : object.constructor,
          propertyName : propertyName,
          constraints : option,
          options : isValidationOptions,
          validator : UniqueValidator,
          async : true
      })  
    }
}
