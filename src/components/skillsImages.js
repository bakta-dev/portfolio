import gcp from '../assets/images/skills/gcp.svg'
import html from '../assets/images/skills/html.svg'
import photoshop from '../assets/images/skills/photoshop.svg'
import illustrator from '../assets/images/skills/illustrator.svg'
import docker from '../assets/images/skills/docker.svg'
import adobeXd from '../assets/images/skills/adobe-xd.svg'
import afterEffects from '../assets/images/skills/after-effects.svg'
import css from '../assets/images/skills/css.svg'
import angular from '../assets/images/skills/angular.svg'
import javascript from '../assets/images/skills/javascript.svg'
import nextJS from '../assets/images/skills/nextJS.svg'
import nuxtJS from '../assets/images/skills/nuxtJS.svg'
import react from '../assets/images/skills/react.svg'
import svelte from '../assets/images/skills/svelte.svg'
import typescript from '../assets/images/skills/typescript.svg'
import vue from '../assets/images/skills/vue.svg'
import bootstrap from '../assets/images/skills/bootstrap.svg'
import bulma from '../assets/images/skills/bulma.svg'
import capacitorjs from '../assets/images/skills/capacitorjs.svg'
import coffeescript from '../assets/images/skills/coffeescript.svg'
import memsql from '../assets/images/skills/memsql.svg'
import mongoDB from '../assets/images/skills/mongoDB.svg'
import mysql from '../assets/images/skills/mysql.svg'
import postgresql from '../assets/images/skills/postgresql.svg'
import tailwind from '../assets/images/skills/tailwind.svg'
import vitejs from '../assets/images/skills/vitejs.svg'
import vuetifyjs from '../assets/images/skills/vuetifyjs.svg'
import c from '../assets/images/skills/c.svg'
import cplusplus from '../assets/images/skills/cplusplus.svg'
import csharp from '../assets/images/skills/csharp.svg'
import dart from '../assets/images/skills/dart.svg'
import go from '../assets/images/skills/go.svg'
import java from '../assets/images/skills/java.svg'
import julia from '../assets/images/skills/julia.svg'
import kotlin from '../assets/images/skills/kotlin.svg'
import matlab from '../assets/images/skills/matlab.svg'
import php from '../assets/images/skills/php.svg'
import python from '../assets/images/skills/python.svg'
import ruby from '../assets/images/skills/ruby.svg'
import swift from '../assets/images/skills/swift.svg'
import adobeaudition from '../assets/images/skills/adobeaudition.svg'
import aws from '../assets/images/skills/aws.svg'
import deno from '../assets/images/skills/deno.svg'
import django from '../assets/images/skills/django.svg'
import firebase from '../assets/images/skills/firebase.svg'
import gimp from '../assets/images/skills/gimp.svg'
import git from '../assets/images/skills/git.svg'
import graphql from '../assets/images/skills/graphql.svg'
import lightroom from '../assets/images/skills/lightroom.svg'
import materialui from '../assets/images/skills/materialui.svg'
import nginx from '../assets/images/skills/nginx.svg'
import numpy from '../assets/images/skills/numpy.svg'
import opencv from '../assets/images/skills/opencv.svg'
import premierepro from '../assets/images/skills/premierepro.svg'
import pytorch from '../assets/images/skills/pytorch.svg'
import selenium from '../assets/images/skills/selenium.svg'
import strapi from '../assets/images/skills/strapi.svg'
import tensorflow from '../assets/images/skills/tensorflow.svg'
import webix from '../assets/images/skills/webix.svg'
import wordpress from '../assets/images/skills/wordpress.svg'

import azure from '../assets/images/skills/azure.svg'
import blender from '../assets/images/skills/blender.svg'
import fastify from '../assets/images/skills/fastify.svg'
import figma from '../assets/images/skills/figma.svg'
import flutter from '../assets/images/skills/flutter.svg'
import haxe from '../assets/images/skills/haxe.svg'
import ionic from '../assets/images/skills/ionic.svg'
import markdown from '../assets/images/skills/markdown.svg'
import microsoftoffice from '../assets/images/skills/microsoftoffice.svg'
import picsart from '../assets/images/skills/picsart.svg'
import sketch from '../assets/images/skills/sketch.svg'
import unity from '../assets/images/skills/unity.svg'
import wolframalpha from '../assets/images/skills/wolframalpha.svg'
import redux from '../assets/images/skills/redux.svg'
import canva from '../assets/images/skills/canva.svg'
import sass from '../assets/images/skills/sass.svg'
import Vscode from '../assets/images/skills/vscode.svg'
import Lighthouse from '../assets/images/skills/lighthouse.svg'
import wave from '../assets/images/skills/wave.svg'
import Github from '../assets/images/skills/github.svg'
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'vscode':
            return Vscode;
        case 'wave':
            return wave;
        case 'lighthouse':
            return Lighthouse;
        case 'github':
            return Github;
        case 'sass':
            return sass;
        case 'redux':
            return redux;
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}
