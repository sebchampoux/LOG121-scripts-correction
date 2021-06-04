#clear
for root in "$1/*"; do
  for group in $root/; do
    cd "$group"
    printf "\n============================\n"
    echo $group
    cat README-identification.md
    cd src/main/java

    # Compile and run
    javac -cp . Simulation/Simulation.java
    java -cp . Simulation.Simulation

    cd ../../../
    cd ../
  done  
done