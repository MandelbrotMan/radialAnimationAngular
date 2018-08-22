import { trigger, transition, style, keyframes, animate, state, animation, useAnimation} from '@angular/animations';

//marginLeft, marginTop, borderRadius, width, height, zIndex, pColor, 

export const fadeIn = () => trigger('buttonObj', [
    state('missing', style({
        opacity: 0
    })),
    state('present', style({
        opacity: 1
    })),
    transition("missing => present", animate('1000ms ease-out')),
    transition("present => missing", animate('500ms ease-out'))
])

const expandAnimation = animation([
   style({
                width: "{{width}}px",
                height: "{{height}}px",
                backgroundColor: "transparent",
                borderRadius: "{{borderRadius}}px",
                border: "transparent solid {{borderRadius}}px",
                transform: "translateX(50vw) translateY(40vh)",
                opacity: 1.0,
                marginLeft:"-{{marginLeft}}",
                marginTop:"{{marginTop}}",
                zIndex: "{{zIndex}}"

            }),
            animate('{{duration}}', keyframes([
                    style({
                        offset: 0.3,
                        width: "{{width}}px",
                        height: "{{height}}px",
                        backgroundColor: "{{pColor}}",
                        borderRadius: "{{borderRadius}}px",
                        border: "transparent solid 1px",
                        transform: "translateX(50vw) translateY(40vh)",
                        marginLeft:"-{{marginLeft}}",
                        marginTop:"{{marginTop}}",
                        zIndex: "{{zIndex}}"   
                    }),
                    style({
                        offset: 0.305,
                        width: "{{width}}px",
                        height: "{{height}}px",
                        backgroundColor: "transparent",
                        borderRadius: "{{borderRadius}}px",
                        border: "{{pColor}} solid {{borderRadius}}px",
                        transform: "translateX(50vw) translateY(40vh)",
                        marginTop:"{{marginTop}}",
                        marginLeft:"-{{marginLeft}}",
                        
                    }),
                    style({
                        offset: 1.0,
                        opacity: 1.0,
                        width: "{{width}}px",
                        height: "{{height}}px",
                        backgroundColor: "transparent",
                        borderRadius: "{{borderRadius}}px",
                        border: "{{pColor}} solid 1px",
                        transform: "translateX(50vw) translateY(40vh)",     
                        marginTop:"{{marginTop}}",
                        marginLeft:"-{{marginLeft}}",
                    })

            ]))      
], {params: {startBorder: 'white solid 25px', duration: '200ms'}});

export const circularTrigger1 = (params) => trigger("CircleObj1", [
    state("gone", 
        style({
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
            backgroundColor: params.pColor,
            transform: "translateX(50vw) translateY(50vh)",
            zIndex: params.zIndex
        })
    ),  
    state("here", 
        style({
            opacity: 1,
            position: "absolute",
            width:params.width + "px",
            height: params.height + "px",
            backgroundColor: "transparent",
            borderRadius: params.width/2 + "px",
            border: params.pColor +" solid 2px",
            transform: "translateX(50vw) translateY(40vh)",
            marginLeft:"-"+(30+(params.height-50)/2)+"px",
            marginTop:params.marginTop,
            zIndex: params.zIndex
        })
    ),  
    transition('gone => here', [
            useAnimation(expandAnimation, {params: params}),
    ])
])
export const circularTrigger2 = (params) => trigger("CircleObj2", [
    state("gone", 
        style({
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
            backgroundColor: params.pColor,
            transform: "translateX(50vw) translateY(40vh)",
            marginTop:params.marginTop,
            zIndex: params.zIndex
        })
    ),  
    state("here", 
        style({
            opacity: 1,
            position: "absolute",
            width:params.width + "px",
            height: params.height + "px",
            backgroundColor: "transparent",
            borderRadius: params.width/2 + "px",
            border: "#6d4c41 solid 4px",
            transform: "translateX(50vw) translateY(40vh)",
            marginTop:params.marginTop,
            marginLeft:"-"+(30+(params.height-50)/2)+"px",
            zIndex: params.zIndex
        })
    ),  
    transition('gone => here', [
            useAnimation(expandAnimation, {params: params}),
    ])
])
export const circularTrigger3 = (params) => trigger("CircleObj3", [
    state("gone", 
        style({
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
            backgroundColor: params.pColor,
            transform: "translateX(50vw) translateY(50vh)",
            marginTop:params.marginTop,
            zIndex: params.zIndex
        })
    ),  
    state("here", 
        style({
            opacity: 0.9,
            position: "absolute",
            width:params.width + "px",
            height: params.height + "px",
            backgroundColor: "#fafafa",
            borderRadius: params.width/2 + "px",
            border: params.pColor +" solid 1px",
            transform: "translateX(50vw) translateY(40vh)",
            marginTop:params.marginTop,
            marginLeft:"-"+(30+(params.height-50)/2)+"px",
            zIndex: params.zIndex
        })
    ),  
    transition('gone => here', [
            useAnimation(expandAnimation, {params: params}),
    ])
])
export const circularTrigger4 = (params) => trigger("CircleObj4", [
    state("gone", 
        style({
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
            backgroundColor: params.pColor,
            transform: "translateX(50vw) translateY(40vh)",
            marginTop:params.marginTop,
            zIndex: params.zIndex
        })
    ),  
    state("here", 
        style({
            opacity: 1.0,
            position: "absolute",
            width:params.width + "px",
            height: params.height + "px",
            backgroundColor: "white",
            borderRadius: params.width/2 + "px",
            border: params.pColor +" solid 1px",
            transform: "translateX(50vw) translateY(40vh)",
            marginTop:params.marginTop,
            marginLeft:"-"+(30+(params.height-50)/2)+"px",
            zIndex: params.zIndex
        })
    ),  
    transition('gone => here', [
            useAnimation(expandAnimation, {params: params}),
    ])
])
