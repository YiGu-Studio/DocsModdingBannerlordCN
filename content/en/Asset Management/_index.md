---
title: "ASSET MANAGEMENT"

hide: 
- toc
- breadcrumb
---

# ASSET MANAGEMENT

## Asset Types

Adding & Overriding Assets In RGL you can easily override existing assets or create new ones within the editor for your custom mode. Override mechanism works by replacing existing assets with the one you supplied in your module’s assets directory. It tries to match your custom assets with the ones previously registered by other modules by their names. This happens with respect to loading order of the modules. If Module A and Module B are loaded in addition to the Native module respectively, list of final assets and their sources will be as follow :

## Creating a Module - Quick Guide

Modules can contain assets ranging from meshes to physics bodies, scenes, gameplay entities like factions, lords, troops, items and scripts and behaviours that can run any gameplay logic. In this gide, the process of creating one will be explained. Creating A New Module Modules reside inside the “Modules” folder in the root directory. It must contain an XML file named SubModule.xml. This file contains basic information like “Name”, “ID” and “Version” nodes.