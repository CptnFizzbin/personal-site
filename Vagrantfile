Vagrant.configure("2") do |config|
  config.vm.box = "smallhadroncollider/centos-6.4-lamp"
  config.vm.synced_folder "./www", "/var/www"
  config.vm.network "private_network", ip: "192.168.35.6"

  config.vm.provider :virtualbox do |v|
    v.customize ["modifyvm", :id, "--memory", 512]
  end

  config.vm.provision "shell", path: "provision.sh"
end
