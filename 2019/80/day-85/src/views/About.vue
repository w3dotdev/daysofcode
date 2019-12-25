<template>
  <div>
    <h3>{{ this.$store.state.authUser.email }}</h3>

    <div class="character">
			<div class="character-head">
				<div class="bonnet"></div>
				<div class="face">
					<div class="ears"></div>
					<div class="eyes"></div>
					<div class="beard">
						<div class="nose"></div>
						<div class="mouth"></div>
					</div>
				</div>
			</div>
			<div class="character-body">
				<div class="arms">
					<div class="arms-left"></div>
					<div class="arms-right"></div>
				</div>
				<div class="legs">
					<div class="legs-left"></div>
					<div class="legs-right"></div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      auth:this.$store.state.Auth
    }
  },
  mounted(){
    if (!this.auth) {
      this.$router.push('/')
    }
  },
  updated() {
    if (!this.auth) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
*:before,
*:after {
  content: "";
  display: inline-block;
}

@keyframes headLaugh {
  0% { bottom: 83px; }
  45% { bottom: 83px; }
  50% { bottom: 90px; }
  92% { bottom: 90px; }
  98% { bottom: 83px; }
  100% { bottom: 83px; }
}
@keyframes mouthLaugh {
  0% { width: 20px; }
  45% { width: 20px; }
  50% { width: 15px; }
  92% { width: 15px; }
  98% { width: 20px; }
  100% { width: 20px; }
}

.character { margin-top: -130px; margin-left: -110px; position: absolute; left: 50%; top: 50%; }
.character:before { background: #022e3e; position: absolute; left: -1000%; height: 1000px; top: 330px; width: 2000%; z-index: -1; }
.character:after { background: #021b24; border-radius: 50%; height: 20px; position: absolute; bottom: -175px; width: 220px; z-index: -1; }

.character-body { transform: translateY(50%); width: 190px; height: 180px; background: #de2f32; position: relative; border-radius: 50%; top: 0; }
.character-body:before { width: 100%; height: 30px; position: absolute; bottom: 63px; border-radius: 50%; box-shadow: 0px 10px 0px 9px #000; left: 1px; }
.character-body:after { border: 4px solid #F2D108; height: 25px; width: 40px; position: absolute; bottom: 34px; border-radius: 5px; left: 50%; margin-left: -20px; box-shadow: inset -5px -10px 0 -4px #f2d108; }

.character-head { animation: headLaugh 4s linear infinite; transform: translateX(-50%); z-index: 2; position: absolute; bottom: 90px; left: 50%; }
.character-head:before { width: 120px; height: 100px; background: #f6c9ba; border-radius: 50%; box-shadow: 0 -15px 0 12px #fff; }

.face:before,
.face:after { width: 20px; height: 10px; box-shadow: 0 -6px 0 4px #fff; border-radius: 50%; position: absolute; top: 32px; }
.face:before { left: 28px; }
.face:after { right: 28px; }

.bonnet { width: 130px; height: 120px; background: #de2f32; position: absolute; top: -50px; left: 0; border-radius: 50%; z-index: -1; }
.bonnet:before { width: 71px; height: 49px; border-radius: 50%; box-shadow: -30px 27px 0 4px #de2f32; position: absolute; right: -58px; top: 1px; }
.bonnet:after { width: 38px; height: 38px; background: #fff; border-radius: 50%; z-index: 5; position: absolute; right: -58px; top: 25px; box-shadow: 0px 6px 0px -4px rgba(0, 0, 0, 0.1); }

.eyes { transform: translateX(-50%); position: absolute; left: 50%; top: 40px; }
.eyes:before,
.eyes:after { background: #fff; box-shadow: inset -4px -2px 0 5px #000; border-radius: 50%; position: absolute; width: 15px; height: 20px; top: 0; }
.eyes:before { left: -28px; }
.eyes:after { right: -28px; }

.beard { transform: translateX(-50%); width: 170px; height: 68px; box-shadow: 0 32px 0 0 #fff; border-radius: 50%; position: absolute; top: 50px; left: 50%; }
.beard:before { height: 80px; background: #fff; position: absolute; top: 12px; width: 140px; left: 15px; border-radius: 30px; }
.beard:after { right: 26px; position: absolute; border-radius: 50%; z-index: 2; height: 20px; top: -4px; width: 118px; box-shadow: 0 8px 0 7px #fff; }

.nose { transform: translateX(-50%); width: 25px; height: 20px; border-radius: 50%; background: #f6c9ba; position: absolute; z-index: 3; box-shadow: inset -3px -3px 0px #ecbeaf; left: 50%; top: 0; }

.mouth { animation: mouthLaugh 2s linear infinite; transform: translateX(-50%); background: #a8744f; z-index: 3; position: absolute; width: 20px; height: 10px; border-bottom-left-radius: 80px 50px; left: 56%; top: 35px; }

.ears:before,
.ears:after { width: 20px; height: 30px; border-radius: 50%; background: #f6c9ba; position: absolute; top: 50%; z-index: -1; }
.ears:before { transform: rotate(-10deg); left: -8px; }
.ears:after { transform: rotate(10deg); right: -8px; }

.legs { border-radius: 50%; background: #de2f32; height: 150px; position: absolute; z-index: -1; bottom: -30px; width: 100%; }
.legs:before { width: 214px; box-shadow: 0 32px 0 0 #fff; border-radius: 50%; height: 72px; top: 11px; position: absolute; left: -12px; }

.arms { width: 40px; height: 74px; background: #fff; left: 50%; position: absolute; margin-left: -20px; top: 42px; }
.arms:before { width: 40px; height: 40px; border-radius: 40px 0 0 90px; background: #de2f32; position: absolute; left: -82px; }
.arms:after { width: 40px; height: 40px; border-radius: 0 40px 90px 0; background: #de2f32; position: absolute; right: -82px; }

.arms-left { width: 40px; height: 40px; border-radius: 50%; background: #fff; position: absolute; left: -93px; z-index: 2; top: 5px; }
.arms-left:before { width: 12px; height: 15px; background: #de2f32; position: absolute; left: 10px; border-radius: 19px; box-shadow: 2px 0 0 0 #c31c1f; }
.arms-left:after { width: 40px; height: 40px; border-radius: 50%; background: #de2f32; position: absolute; left: -8px; top: 10px; box-shadow: 3px 0 0 0 #c31c1f; z-index: 2; }

.arms-right { border-radius: 50%; background: #de2f32; position: absolute; right: -93px; z-index: 2; top: 5px; }
.arms-right:before { content: "Feliz Natal!"; display: inline-block; border: 2px solid #fff; border-radius: 4px; font-family: Arial; font-size: 22px; padding: 4px; background: #385e37; color: #feffbf; text-transform: uppercase; position: absolute; right: -24px; text-shadow: 0 3px 0 #214820; }
.arms-right:after { width: 20px; height: 40px; background: #de2f32; position: absolute; top: 0px; left: 15px; border-radius: 50%; box-shadow: -2px 1px 0px 0px #224421, inset 3px 0 0 0 #c02023; }

.legs-left { position: absolute; left: 0; bottom: 0; }
.legs-left:before { width: 40px; height: 40px; background: #de2f32; position: absolute; top: -17px; left: 50px; }
.legs-left:after { width: 0; height: 0; border-bottom: 40px solid #000; border-left: 60px solid transparent; position: absolute; top: 10px; left: -10px; box-shadow: 40px 0px 0 0 #000; }

.legs-right { position: absolute; right: 0; bottom: 0; }
.legs-right:before { width: 40px; height: 40px; background: #de2f32; position: absolute; top: -17px; right: 50px; }
.legs-right:after { width: 0; height: 0; border-bottom: 40px solid #000; border-right: 60px solid transparent; position: absolute; top: 10px; right: -10px; box-shadow: -40px 0px 0 0 #000; }
</style>
