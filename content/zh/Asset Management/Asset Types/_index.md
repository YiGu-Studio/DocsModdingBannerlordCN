---
title: "资源类型"

hide: 
- toc
- breadcrumb
---

## Adding & Overriding Assets
In RGL you can easily override existing assets or create new ones within the editor for your custom mode. Override mechanism works by replacing existing assets with the one you supplied in your module’s assets directory. It tries to match your custom assets with the ones previously registered by other modules by their names. This happens with respect to loading order of the modules. If Module A and Module B are loaded in addition to the Native module respectively, list of final assets and their sources will be as follow :

## Bodies
Bodies define the physics boundaries of objects. They can be assigned to entities in scenes or prefabs. Users can edit the Body Flags to change their behaviour. Body Flags Two Sided: Forces the physics engine to use both sides of the polygons for this body. AI Limiter: Used to tag bodies which will only used against AI agents, excluding the player. Destructible Door: Used by the automatic navigation mesh generator to not put nav mesh under destructable doors.

## Entities & Prefabs
In RGL, entities are containers for all of the meshes, particles, script components, occluders and physics objects. They can also contain other entities as children. They have their own transformation that determines their position, scale and rotation in the world. Prefabs Prefabs are template entities which do not sever the connection to the prefab even after it is saved in a scene. Complex entities can be constructed one time and saved as a prefab to be used at any time, in any scene.

## Materials
Materials define the rendering characteristics of meshes. They contain the shader and texture information, also the rendering flags (defined from by shader and the global ones). A mesh can have a single material. The initial value of a mesh’s material will be assigned through it’s given material name in the 3rd party mesh editing applications. Materials can be created and edited through the Material Browser which can be accessed through the Resource Browser.

## Meshes
Meshes contain the polygon positions and attributes to be used at the rendering pass. Every mesh has one material that defines their rendering behaviour. They are grouped inside MetaMesh’s by their LOD level. Also, at the same LOD level, there can be multiple meshes with different materials. More information about importing meshes to the engine can be found at Material Editor. LOD System Modern engines use LOD(level of detail) systems to ensure that the amount of GPU share used by the closer parts of the screen is more than the far ones.

## Naming Conventions
To distinguish and organize assets and simplfy asset authoring process there are some predefined rules to consider. Meshes All meshes imported from a single geometry file(e.g. fbx) are grouped by their names. To add a LOD mesh simply append ”.lod<n>“ to the name of your mesh. Here n is the number of lod. Consider an fbx file as below : asset.fbx : wall_damaged wall_damaged_v2 wall_damaged_v2.lod1 wall_damaged.lod1 wall_damaged.lod2 Two meshes will be imported from asset.

## Overriding Scenes and Prefabs
You can override existing scenes and prefabs by creating new one with the same name. You should keep in mind that overriding prefabs may break existing scripts if you change entity hierarchy. Make sure you preserve entity hierarchy to avoid possible breaking errors if your entity is being used by existing scripts. Prefabs Prefab definitions are stored in xml files located in Prefabs folder in each module’s directory.

## Paths
In RGL, ‘Paths’ are used to define continous points within a scene. They have unique names and can be used by the gameplay logic for different reasons. Paths define how the siege engines move in missions. Also, for field battle missions, initial spawn point candidates are defined via a path. The spawn logic selects two positions for the teams with respect to the size of the battle. Detailed information about path editing can be found at Path Editing.

## Scripts
Script components are executable scripts that are attached to entities and can be used to implement various gameplay functionalities. In Bannerlord, many gameplay logic are written via script components. For example chairs, dropped weapon, siege machines. There are many different callbacks that can be inherited and filled in these script components. Callbacks Constructor: In constructor one needs to assign default values to its public variables(variables which can be changed by the scene maker).

## Textures
Textures can be imported through the Asset Browser. They can be assigned to materials via the Material Editor. The texture slots of the PBR materials can be found at Material Editor. The maximum value for the terrain textures’ resolution is 2048 by 2048.