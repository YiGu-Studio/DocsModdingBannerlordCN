---
title: "BANNERLORD 任务"

hide: 
- toc
- breadcrumb
---

## Mission Tactical Positions
TACTICAL POSITIONS AND TACTICAL REGIONS These are scripted entities that let the AI know of the terrain’s features. They do not work like siege, the AI will not always use the tactical positions or regions you may place. They may use them under conditions that favor the use of these. Depending on player movement and spawn path randomization, there are a very high number of scenarios that can occur during battles.

## Destructible Component
The destruction system which gives artists a lot more freedom is explained below. Characteristics It is a ScriptComponent which can be applied to any entity in a scene, as long as that entity has a collision body. When not given any information, the script will just make the entity disappear after being destroyed. It will also re-appear when the mission resets. The script can be used to destroy entities in one or more states, with optional sound, particles and dynamic objects spawning in each state.

## Scene Barrier Builder
Introduction Barrier Builder is a tool that helps artist to generate barriers over walls to prevent agents to fall down. Usage Create a path, you can use the button on toolbar Give a name to path Build your path as you wish Press “Enable Barrier Build” chekbox on path inspector, it will create your barrier entity for you. You can go to that entity with “Go to Entity” Button and chnage its options like height, the entity named as “path_barrier_PATHNAME”

## Scene Spawn Point Guide
How to design fully featured scenes in Bannerlord Each scene has own basic necessities to run without crashing and has extras to give better experience to player. Designers can check these necessities with “Spawn Point Debug Tool” to be sure that their scene will not crash. 1. Town Center Scene Player will be spawned on the “sp_player_outside” prefab if he/she is entering the city for the first time, because of this feature “sp_player_outside” must be placed far from city’s entrance; otherwise player will be spawned on “sp_player” and this spawnpoint can be next to the entrance gate.

## Script Component Callbacks
The callbacks of the script components are listed below. Constructor In constructor one needs to assign default values to its public variables(variables which can be changed by the scene maker). In constructor script component is not assigned to an entity or scene. Also, you should not write any logic that has any side effect because , even though it is created, the script component may be deleted once the scene is opened because of the upgrade level system.

## Spawn Point Debug Tool
Introduction The tool which has prefab named “SpawnPointDebugView” can be added to scene. Prefab has “SpawnPointDebugView” script attached and tool can be opened through inspector toggle. Tool has 3 tabs named “Scene basic information tab”, “Scene entity check tab” and “Navigation mesh check tab”. 1. Scene Basic Information Tab This tab tries to determine the scene type in order to find necessities; if detected type is not correct, artist can override the type using toggle buttons below.

