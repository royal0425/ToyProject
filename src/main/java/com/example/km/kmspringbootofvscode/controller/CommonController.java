package com.example.km.kmspringbootofvscode.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController{
    
    @RequestMapping(value = "/")
    public String enter() {
        HashMap result = new HashMap();
        result.put("message", "안녕하세요");

        return "index";
    }

    @RequestMapping(value = "/api")
    public HashMap test() {
        HashMap result = new HashMap();
        result.put("message", "안녕하세aaaaaaa요");
        System.out.println("Hello");
        return result;
    }
}