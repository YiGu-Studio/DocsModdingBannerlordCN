---
title: "RESOURCE EDITORS"

hide: 

- toc
- breadcrumb

---

## [Material Editor](material-editor)

Overview Our proprietary game engine uses standard metallic PBR pipeline for material authoring. New materials can easily be created after navigating to a folder, right click on empty space, and select Create > Material. Material editor can be opened by double clicking an existing material in the resource browser. Inspector Shader You can select apporopriate shader from this Shader Selection widget. There are a few mainly used shaders; most important ones are pbr_metallic and pbr_shading.

## Particle Editor

Parameter types Random-bias parameters These parameters consists of two numerical values: base value and a random bias value respectively. Values of this parameter are evaluated as value=base+(random value in -bias,bias range) Random-bias parameters with curve(s) These parameters consists of two numerical values and one or two curves: base value ,a random bias value and one or two curves. Most of the curves take emitter life or particle life as input.

## Skeleton Editor

Skeleton editor can be used to edit, bones, joints, and ragdoll parameters of skeletons after importing them using resource browser. Editing Bones and Joints To edit a bone or joint, you can select the item you want from the outliner panel. This will create an Inspector of bones/joints for you to edit. All parameters are visualized and all edits will immediately be visible in the preview. Joint Properties Axis lock Axis lock limits the movement the child bone in translation space.

## Cloth Simulation

Preparing Mesh Cloth simulation system uses alpha channels of vertices of meshes. Values in the alpha channel represents how much a vertex can move away from its original position. 0.1 of alpha means vertex can be moved 0.1 units from its original position by cloth simulation. If you set zero to alpha value that means that vertex will be fixed to its position and will not be updated by simulation.

## Meta Mesh Editor

Import Settings Divide Into Grid: Divides the meta mesh into grids, and adds all the generated section meshes to the submeshes. Remove Redundant Vertices: The name implies what it does. Recompute Normals: While importing the meta mesh, computes normal vectors for all sub-meshes instead of importing them as well. Normal Computation: Decides whether the normal vector computation will depend on the face area (weighted) or not (default). Recompute Tangents: While importing the meta mesh, computes the tangent vectors for all sub-meshes instead of importing them as well.

## Model Viewer

The Model Viewer can be accesed from; Editor > Window > Show Model Viewer From the left panel, you can change Atmosphere, hide/show ground, or add as many entities as you want. The entities can either be Human or simple Mesh. Pressing Add Entity will open a modal window for you to select the entity type. Transform From this panel, you can set entities Tranform, Rotation, and Scale. Animation From this panel, you can choose Skeleton type, and Animation.

## Texture Editor

The Texture Editor can be accesed from; Editor > Window > Show Resource Browser > ..Search for Texture.. > ..Double Click on Texture.. From the Texture Inspector (Right Panel), you can enable/disable MipMap blending by toggling Use Mipmap Blending checkbox. When you enable MipMap Blending, you will see all mip levels of the selected texture next to each other in Preview Window. Clicking on MipMap Blend Amounts will open open a new window where you can adjust blend amounts for every mip level.
